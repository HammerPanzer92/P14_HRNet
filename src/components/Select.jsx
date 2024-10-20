export function Select(props) {

  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <select name={props.id} id={props.id} onChange={props.onChange}>
        {props.options.map((option, index) => {
          return <option key={index} value={option.value || option}>{option.name || option}</option>;
        })}
      </select>
    </>
  );
}
