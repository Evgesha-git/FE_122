import * as orginaizer from "./organize";
import * as user from "./userActions";

export const actions = {
    ...orginaizer,
    ...user,
}