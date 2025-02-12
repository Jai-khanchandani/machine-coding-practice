"use client";

export default function Interests({ formData, setFormData }) {
  const { interests } = formData;

  const hobbies = [
    ...interests,
    "Music",
    "Singing",
    "Adventure Sports",
    "Coding",
  ];
  console.log({ interests });

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
      {hobbies.map((interest, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              name={interest}
              checked={interests.includes(interest)}
              onChange={handleInterestsChange}
            />
            {interest}
          </label>
        );
      })}
    </div>
  );
}
