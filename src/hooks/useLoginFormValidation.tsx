import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    username: yup.string().required('این فیلد الزامی است'),
    password: yup.string().required('این فیلد الزامی است'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

function useLoginFromValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, errors };
}

export default useLoginFromValidation;
