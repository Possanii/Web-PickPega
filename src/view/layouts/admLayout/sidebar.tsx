import { DropdownMenu } from "../../../components/DropdownMenu";

export function Sidebar() {
  return (
    <div className="h-full w-1/4">
      <nav className="bg-red-500 min-h-full">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <span>oi</span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Teste</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </nav>
    </div>
  );
}
