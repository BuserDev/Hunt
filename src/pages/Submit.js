import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Submit = (props) => {
    return (
        <IonPage>
            <SmallHeader title="Submit" />
            <IonContent color="medium" fullscreen>
                <LargeHeader title="Submit" />
            </IonContent>
        </IonPage>
    );
};

export default Submit;
