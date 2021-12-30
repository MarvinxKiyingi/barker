import { IForm } from '../../Models/IForm';

export const SignUpForm = (props: IForm) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type='text' placeholder='name' name='name' onChange={props.onChange} />
      <input type='number' placeholder='age' name='age' onChange={props.onChange} />
      <input type='number' placeholder='height' name='height' onChange={props.onChange} />
      <input type='text' placeholder='email' name='email' onChange={props.onChange} />
      <input type='password' placeholder='password' name='password' onChange={props.onChange} />
      <input type='password' placeholder='confirmPassword' name='confirmPassword' onChange={props.onChange} />
      <input type='checkbox' placeholder='gdprTerms' name='gdprTerms' onChange={props.onChangeGDPR} />
      <button disabled={props.disabled} type='submit'>
        Create account
      </button>
    </form>
  );
};
