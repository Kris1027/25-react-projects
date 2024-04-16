import { Tabs } from "./Tabs";

function RandomComponent() {
  return (
    <h1 className="text-xl bg-red-600 text-white p-4">Some random content</h1>
  );
}

export const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: "Tab 1 content",
    },
    {
      label: "Tab 2",
      content: <span className="bg-amber-600 p-2">Tab 2 content</span>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex: number) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};
