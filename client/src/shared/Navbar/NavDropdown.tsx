import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { logoutUser } from "@/redux/features/auth/authSlice";

export function NavDropdown() {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
      const toastId = toast.loading("Logging out...");
      try {
        dispatch(logoutUser());
        toast.success("Logout successful!", { id: toastId });
      } catch (error) {
        toast.error("Logout failed!", { id: toastId });
        console.error("Logout failed:", error);
      }
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/cart">
            <DropdownMenuItem>
              Cart
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/dashboard">
            <DropdownMenuItem>
              Dashboard
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/dashboard/profile">
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <button onClick={handleLogout} className="w-full">
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
