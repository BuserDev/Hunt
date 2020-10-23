import React from "react";
import {
    IonPage,
    IonContent,
    IonRow,
    IonCol,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonLoading,
} from "@ionic/react";
// import firebase from "../firebase";
// import useFormValidation from "../hooks/useFormValidation";
// import validateEditProfile from "../components/Auth/validateEditProfile";
// import UserContext from "../contexts/UserContext";
// import { toast } from "../utils/toast";
import NavHeader from "../components/Header/NavHeader";

const EditProfile = (props) => {
    return (
        <IonPage>
            <NavHeader title="Edit Profile" />
            {/* <IonLoading message={"Please wait..."} isOpen={busy} /> */}
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput
                        name="name"
                        type="text"
                        // value={values.name}
                        // onIonChange={handleChange}
                        required
                    ></IonInput>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                        name="email"
                        type="text"
                        // value={values.email}
                        // onIonChange={handleChange}
                        required
                    ></IonInput>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position="floating">New Password</IonLabel>
                    <IonInput
                        name="newPassword"
                        type="password"
                    // value={values.newPassword}
                    // onIonChange={handleChange}
                    ></IonInput>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position="floating">Current Password</IonLabel>
                    <IonInput
                        name="currentPassword"
                        type="password"
                        // value={values.currentPassword}
                        // onIonChange={handleChange}
                        required
                    ></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton
                            type="submit"
                            color="primary"
                            expand="block"
                        //   onClick={handleSubmit}
                        //   disabled={isSubmitting}
                        >
                            Save
            </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default EditProfile;
