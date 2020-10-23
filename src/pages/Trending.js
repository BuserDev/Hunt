import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Trending = (props) => {
    return (
        <IonPage>
            <SmallHeader title="Trending" />
            <IonContent color="medium" fullscreen>
                <LargeHeader title="Trending" />
            </IonContent>
        </IonPage>
    );
};

export default Trending;
