import { useForm, useFieldArray } from 'react-hook-form';

export default function MyForm() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      // Default values for your fields
      items: [{ name: "apple" }, { name: "banana" }]
    }
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });

  const onSubmit = (data) => {
    console.log(data); // data.items will contain an array of objects with the input values
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input {...register(`items.${index}.name`)} defaultValue={item.name} />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "" })}>
        Add Item
      </button>
      <input type="submit" />
    </form>
  );
}
