function NotificationMsg({text}){
    switch (text) {
        case 'Hi All':
            console.log(text)
            break;
            case 'Hello Imarticus':
                console.log(text);
                break;
                default:
                    return null;
    }
}
export default NotificationMsg;