import React from "react";
import {
    IonPage,
    IonContent,
    IonRow,
    IonCol,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonRouterLink,
    IonLoading,
} from "@ionic/react";
// import { toast } from "../utils/toast";
// import useFormValidation from "../hooks/useFormValidation";
// import validateLogin from "../components/Auth/validateLogin";
// import firebase from "../firebase";
import NavHeader from "../components/Header/NavHeader";

// const INITIAL_STATE = {
//   email: "",
//   password: "",
// };

const Login = (props) => {
    return (
        <IonPage>
            <NavHeader title="Log In" />
            {/* <IonLoading message={"Please wait..."} isOpen={busy} /> */}
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                        name="email"
                        // value={values.email}
                        type="text"
                        // onIonChange={handleChange}
                        required
                    ></IonInput>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput
                        name="password"
                        type="password"
                        // value={values.password}
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
                            Log In
            </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol class="ion-text-center ion-padding-vertical">
                        <IonRouterLink routerLink={`/forgot`}>
                            Forgot Password?
            </IonRouterLink>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Login;
