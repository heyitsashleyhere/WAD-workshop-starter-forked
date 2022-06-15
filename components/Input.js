const Input = ({ label, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input 
      className="input" 
      type="text" 
      placeholder={placeholder} 
      onChange={(e) => {
        onChange(e.target.value)
      }}/>
    </div>

  );
};

export default Input;
