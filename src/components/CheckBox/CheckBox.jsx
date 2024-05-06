export default function CheckBox(hasAccepted, onChange) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={!hasAccepted}
          onChange={onChange}
        /> 
				I accept terms and conditions
      </label>
      <button
        type="button"
        disabled={!hasAccepted}>
        Proceed</button>
    </div>
  );
}