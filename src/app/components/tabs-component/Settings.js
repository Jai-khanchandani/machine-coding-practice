"use client";

export default function Settings({ formData, setFormData }) {
  const { theme } = formData;

  const handleThemeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  };

  return (
    <div className="dF fdC">
      {["Dark", "Light"].map((item) => {
        return (
          <label key={item} className="mb12">
            <input
              checked={theme === item}
              name={item}
              onChange={handleThemeChange}
              type="radio"
              value={item}
            />
            <span className="ml12">{item}</span>
          </label>
        );
      })}
    </div>
  );
}
