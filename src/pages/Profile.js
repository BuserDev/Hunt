import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Profile = (props) => {
    return (
        <IonPage>
            <SmallHeader title="profile" />
            <IonContent color="medium" fullscreen>
                <LargeHeader title="profile" />
            </IonContent>
        </IonPage>
    );
};

export default Profile;
