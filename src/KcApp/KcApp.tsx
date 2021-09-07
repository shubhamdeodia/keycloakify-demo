

import { memo } from "react";
import type { KcContext } from "./kcContext";
import { defaultKcProps as props } from "keycloakify";
import  Login  from "./Login";
import Terms  from "./Default";
import { MyExtraPage1 } from "./MyExtraPage1";
import { MyExtraPage2 } from "./MyExtraPage2";

export const KcApp = memo(({ kcContext }: { kcContext: KcContext; }) => {
   
    switch (kcContext.pageId) {
        case "login.ftl": return <Login {...{ kcContext, ...props }} />;
        case "register.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "info.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "error.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "login-reset-password.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "login-verify-email.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "terms.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "login-otp.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "login-update-profile.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "login-idp-link-confirm.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "my-extra-page-1.ftl": return <MyExtraPage1 {...{ kcContext, ...props }} />;
        case "my-extra-page-2.ftl": return <MyExtraPage2 {...{ kcContext, ...props }} />;
    }
});