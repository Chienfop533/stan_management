import CustomDialog from '@/core/components/dialog'
import Input from '@/core/components/input'
import { convertDate } from '@/core/utils/convert-date'
import { useAppDispatch } from '@/hooks/redux'
import { addScrumboard, updateScrumboard } from '@/store/scrumboardSlice'
import { ScrumboardType } from '@/types/ScrumboardType'
import { FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, Switch } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

interface FormData {
  title: string
  description: string
  beginTime: Date
  endTime?: Date
  star: boolean
}

interface ScrumboardFormProps {
  open: boolean
  data?: ScrumboardType
  setOpen: Dispatch<SetStateAction<boolean>>
}
const ScrumboardForm = (props: ScrumboardFormProps) => {
  const { open, setOpen, data } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const handleClose = () => {
    setOpen(false)
  }
  const defaultValues: FormData = useMemo(() => {
    return {
      title: data ? data.title : '',
      description: data ? data.description : '',
      beginTime: data ? data.beginTime : new Date(),
      endTime: data ? data.endTime : undefined,
      star: data ? data.star : false
    }
  }, [data])

  const handleSave = (dataForm: FormData) => {
    if (data) {
      const scrumboardEdit: ScrumboardType = {
        id: data.id,
        image: data.image,
        title: dataForm.title,
        description: dataForm.description,
        beginTime: dataForm.beginTime,
        endTime: dataForm?.endTime,
        progress: data.progress,
        status: dayjs(new Date()).isAfter(dataForm.beginTime) ? 'active' : 'init',
        star: dataForm.star
      }
      dispatch(updateScrumboard(scrumboardEdit))
    } else {
      const newScrumboard: ScrumboardType = {
        id: uuidv4(),
        image: `/images/scrumboard/${Math.floor(Math.random() * 5) + 1}.jpg`,
        title: dataForm.title,
        description: dataForm.description,
        beginTime: dataForm.beginTime,
        endTime: dataForm?.endTime,
        progress: 0,
        status: dayjs(new Date()).isAfter(dataForm.beginTime) ? 'active' : 'init',
        star: dataForm.star
      }
      dispatch(addScrumboard(newScrumboard))
    }
    reset()
    setOpen(false)
  }
  useEffect(() => {
    reset(defaultValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues])
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange'
  })
  return (
    <CustomDialog
      open={open}
      title={data ? t('edit') : t('add') + ' ' + t('scrumboard')}
      closeName={t('cancel')}
      saveName={data ? t('edit') : t('add')}
      handleClose={handleClose}
      handleSave={handleSubmit(handleSave)}
      sx={{ '.MuiPaper-root': { width: '100%' } }}
    >
      <form noValidate autoComplete='off'>
        <InputLabel sx={{ fontWeight: 600 }} error={Boolean(errors.title)}>
          {t('scrumboard_title')}
        </InputLabel>
        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <Controller
            name='title'
            control={control}
            rules={{
              required: { value: true, message: t('require_scrumboard_title') },
              minLength: { value: 4, message: t('min_characters', { number: 4 }) }
            }}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={t('scrumboard_title')}
                error={Boolean(errors.title)}
              />
            )}
          />
          {errors.title && <FormHelperText sx={{ color: 'error.main' }}>{errors.title.message}</FormHelperText>}
        </FormControl>
        <InputLabel sx={{ fontWeight: 600 }}>{t('description')}</InputLabel>
        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <Controller
            name='description'
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input value={value} onBlur={onBlur} onChange={onChange} placeholder={t('description')} />
            )}
          />
        </FormControl>
        <Grid container spacing={4}>
          <Grid item sx={{ width: '50%' }}>
            <InputLabel sx={{ fontWeight: 600 }}>{t(' beginTime')}</InputLabel>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <Controller
                name=' beginTime'
                control={control}
                render={({ field: { value } }) => (
                  <DatePicker
                    format='DD/MM/YYYY'
                    value={dayjs(value)}
                    maxDate={watch('endTime') ? dayjs(watch('endTime')) : undefined}
                    onChange={value => setValue(' beginTime', convertDate(value))}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{ width: '50%' }}>
            <InputLabel sx={{ fontWeight: 600 }}>{t('endTime')}</InputLabel>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <Controller
                name='endTime'
                control={control}
                render={({ field: { value } }) => (
                  <DatePicker
                    format='DD/MM/YYYY'
                    value={value ? dayjs(value) : undefined}
                    minDate={dayjs(watch(' beginTime'))}
                    onChange={value => setValue('endTime', convertDate(value))}
                  />
                )}
              />
            </FormControl>
          </Grid>
        </Grid>
        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <Controller
            name='star'
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={<Switch color='primary' checked={value} onChange={onChange} />}
                label={t('pin')}
              />
            )}
          />
        </FormControl>
      </form>
    </CustomDialog>
  )
}

export default ScrumboardForm
