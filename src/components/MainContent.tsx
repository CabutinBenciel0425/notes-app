import Cards from "./Cards";

function MainContent({ currentFilter }: { currentFilter: string }) {
  return (
    <main className="flex-1 overflow-y-auto">
      <Cards currentFilter={currentFilter} />
    </main>
  );
}

export default MainContent;
