import Accordion from "../components/Accordion";

const accordionArray = [
  { title: "Item1", description: "child1" },
  { title: "Item2", description: "child2" },
  {
    title: "Item3",
    description: [{ title: "subItem1", description: "subChild1" }],
  },
];

export default function Accodion() {
  return (
    <div>
      <Accordion data={accordionArray} />
    </div>
  );
}
