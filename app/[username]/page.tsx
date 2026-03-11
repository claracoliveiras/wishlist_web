import Collection from "@/components/profile/Collection";
import ProfileButton from "@/components/profile/ProfileButton";
import ProfileHeader from "@/components/profile/ProfileHeader";
import WishlistItem from "@/components/profile/WishlistItem";
import { getUserProfile } from "@/lib/api/profile";
import { UserRoundPlus, UserRoundX } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params;
  const profileData = await getUserProfile({username});

  return (
    <div className="flex flex-col justify-center items-center my-6 w-[50vw] mx-auto">
        <ProfileHeader
          username={ username }
          banner_picture={profileData.banner_picture}
          profile_picture={profileData.profile_picture}
        />

        <div className="mt-4">
          <ProfileButton icon={UserRoundPlus}/>
          <ProfileButton icon={UserRoundX}/>
        </div>

        {/* ADDING COLLECTIONS */}
        <div className="flex flex-row justify-start items-start w-full gap-3">
          <Collection collectionName="Collection 1" imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg"/>
          <Collection collectionName="Collection 2" imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg"/>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full mt-6">

          <WishlistItem imgUrl="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw22eec409/images/Color%20BR/KYLIE/lipkit/4064941006893_KJC_MLK_21_Extraordinary_102_3ml_0.10oz_pack_1000px.jpg?sw=1200&sh=1200&sm=fit"/>
          <WishlistItem imgUrl="//img.ltwebstatic.com/images3_pi/2024/06/27/4e/171947986224e213da272324e918f43f5734012869_thumbnail_900x.webp"/>
          <WishlistItem imgUrl="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw22eec409/images/Color%20BR/KYLIE/lipkit/4064941006893_KJC_MLK_21_Extraordinary_102_3ml_0.10oz_pack_1000px.jpg?sw=1200&sh=1200&sm=fit"/>

          <WishlistItem imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg"/>
          <WishlistItem imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg"/>
          <WishlistItem imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg"/>
          <WishlistItem imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg"/>
        </div>
    </div>
    );
}