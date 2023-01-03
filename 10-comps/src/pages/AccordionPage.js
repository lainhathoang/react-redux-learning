import Accordion from "../components/Accordion";

function Accordion() {
  const items = [
    {
      id: "1213",
      label: "Can I use React on a project?",
      content: "React",
    },
    {
      id: "2af",
      label: "Can I use Javascript on a project?",
      content: "Javascript",
    },
    {
      id: "jh123",
      label: "Can I use CSS on a project?",
      content: "CSS",
    },
  ];

  return <Accordion items={items} />;
}

// fake logic for develop
// function myFunction(items, expandedIndex) {
//   return items.map((item, index) => {
//     if (index === expandedIndex) {
//       return "expanded";
//     } else {
//       return "collapsed";
//     }
//   });
// }

export default Accordion;
