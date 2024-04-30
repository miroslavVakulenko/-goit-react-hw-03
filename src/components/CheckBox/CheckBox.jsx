export default function CheckBox(hasAccepted, onCheck) {

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={onCheck}
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