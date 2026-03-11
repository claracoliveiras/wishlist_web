import { getUserProfile } from "@/lib/api/profile";

type ProfileHeaderProps = {
  username: string;
};

export default async function ProfileHeader({
  username
}: ProfileHeaderProps) {

  const profileData = await getUserProfile({username})

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative flex w-full flex-col">
        <img
          className="h-[10vw] w-full rounded-[20px] object-cover"
          src={profileData.banner_picture}
          alt={`${username} banner`}
        />
        <img
          className="absolute left-1/2 -bottom-[3vw] h-[6vw] w-[6vw] -translate-x-1/2 rounded-2xl object-cover"
          src={profileData.profile_picture}
          alt={`${username} profile`}
        />
      </div>
      <h1 className="mt-[3.5vw] text-black">@{username}</h1>
    </div>
  );
}


