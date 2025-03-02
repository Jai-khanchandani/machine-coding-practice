"use client";

export default function Interests({ errors, formData, setFormData }) {
  const { interests } = formData;

  const hobbies = [
    "Travelling",
    "Gym",
    "Music",
    "Singing",
    "Adventure Sports",
    "Coding",
  ];

  const handleInterestsChange = (e) => {
    const { name } = e.target;

    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(name)
        ? prev.interests.filter((interest) => interest !== name)
        : [...prev.interests, name],
    }));
  };

  return (
    <div className="dF fdC">
      {hobbies.map((interest, index) => (
        <label key={index} className="mb12">
          <input
            type="checkbox"
            name={interest}
            checked={interests.includes(interest)}
            onChange={handleInterestsChange}
          />
          <span className="ml12">{interest}</span>
        </label>
      ))}
      {errors.interests && <span>{errors.interests}</span>}
    </div>
  );
}
