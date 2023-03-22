import styles from '../../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import useGetState from '../../../../hooks/useGetState'
import Select from '../../../common/Select'

const States = ({ onBlurData }) => {
  const valuesStates = useGetState()
  const {
    register,
    getValues,
    formState: { errors }
  } = useFormContext()

  const handleMunipality = (event) => {
    const getId = event.target.value
    // console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleMunipality}
        register={register}
        options={valuesStates?.data}
        emptyOptions='Estado de nacimiento'
        name='stateId'
        onBlur={onBlurData}
        error={errors?.stateId?.message}
      />
    </div>
  )
}

export default States
