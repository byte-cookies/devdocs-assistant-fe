function LeftSidebar() {
  return (
    <aside className={cn(leftSidebarStyles())}>
      <div className="p-4">
        <h2 className="font-semibold mb-4">Navigation</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Docs
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Search
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default LeftSidebar;
