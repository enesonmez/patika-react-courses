import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      Name:
      <input name="name" value={form.name} onChange={onChangeInput} />
      <p>{form.name}</p>
      <br />
      Surname:
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <p>{form.surname}</p>
    </div>
  );
}

export default InputExample;
