import CustomDialog from '@/core/components/dialog'
import Input from '@/core/components/input'
import { convertDate } from '@/core/utils/convert-date'
import { FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, Switch } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface FormData {
  title: string
  description: string
  begin_time: Date
  end_time?: Date
  star: boolean
}
const defaultValues: FormData = {
  title: '',
  description: '',
  begin_time: new Date(),
  star: false
}

interface ScrumboardFormProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const ScrumboardForm = (props: ScrumboardFormProps) => {
  const { open, setOpen } = props
  const { t } = useTranslation()

  const handleClose = () => {
    setOpen(false)
  }
  const handleSave = (data: FormData) => {
    console.log(data)
    setOpen(false)
  }
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({ defaultValues, mode: 'onChange' })
  return (
    <CustomDialog
      open={open}
      title={t('add') + ' ' + t('scrumboard')}
      closeName={t('cancel')}
      saveName={t('add')}
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
            <InputLabel sx={{ fontWeight: 600 }}>{t('begin_time')}</InputLabel>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <Controller
                name='begin_time'
                control={control}
                render={({ field: { value } }) => (
                  <DatePicker
                    format='DD/MM/YYYY'
                    value={dayjs(value)}
                    maxDate={watch('end_time') ? dayjs(watch('end_time')) : undefined}
                    onChange={value => setValue('begin_time', convertDate(value))}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{ width: '50%' }}>
            <InputLabel sx={{ fontWeight: 600 }}>{t('end_time')}</InputLabel>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
              <Controller
                name='end_time'
                control={control}
                render={({ field: { value } }) => (
                  <DatePicker
                    format='DD/MM/YYYY'
                    value={value ? dayjs(value) : undefined}
                    minDate={dayjs(watch('begin_time'))}
                    onChange={value => setValue('end_time', convertDate(value))}
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
