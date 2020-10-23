import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Search = (props) => {
    return (
        <IonPage>
            <SmallHeader title="Search" />
            <IonContent color="medium" fullscreen>
                <LargeHeader title="Search" />
            </IonContent>
        </IonPage>
    );
};

export default Search;
