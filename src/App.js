import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { Authenticator } from "@aws-amplify/ui-react";
import {
  Header,
  ProfileCardCollection,
  PersonCreateForm,
} from "./ui-components";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Header title="mytitle" description="紹介内容" />
          <h1>こんにちは、 {user.username} さん</h1>
          <button onClick={signOut}>サインアウト</button>
          <ProfileCardCollection />

          <PersonCreateForm />
        </main>
      )}
    </Authenticator>
  );
}

// export default withAuthenticator(App);
export default App;
