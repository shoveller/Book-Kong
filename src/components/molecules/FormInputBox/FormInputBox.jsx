import { string, func } from 'prop-types';
import Label from '../../atoms/Label/Label';
import FormInput from '../../atoms/FormInput/FormInput';

// name 속성을 필수값으로 지정해야 form 태그와 상호작용할 수 있습니다.
function FormInputBox({ label, id, type, placeholder, value, onChange, name }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-sm font-normal">
        {label}
      </Label>
      <div>
        <FormInput
          className="w-full h-[42px] border border-[#848484] outline-none pl-2 rounded"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

FormInputBox.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default FormInputBox;
