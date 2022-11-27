import cuid from "cuid";
import { Books, Heart, Notebook, SignOut, User } from "phosphor-react";

export default [
  [
    {
      id: cuid(),
      icon: User,
      name: "Profile",
      location: "/profile"
    }
  ],
  [
    {
      id: cuid(),
      icon: Notebook,
      name: "My Workdspace",
      location: "/me/notes"
    },
    {
      id: cuid(),
      icon: Heart,
      name: "My Likes",
      location: "/me/notes/likes"
    },
    {
      id: cuid(),
      icon: Books,
      name: "My Collection",
      location: "/me/notes/collection"
    }
  ],
  [
    {
      id: cuid(),
      icon: SignOut,
      name: "Sign out",
      location: "/logout"
    }
  ]
];
