enum MsgType {
    AUTH = 1,
    WRITE = 2,
    READ = 3,
    PING = 4,
    SYNC = 5,
    INFO = 6,
    SYS = 7,
    FAILED = 60,
    REGISTER = 61,
    VERIFY = 62,
    RESET = 63,
    ADD_DEVICE = 64,
    REMOVE_DEVICE = 65,
    GET_DEVICE = 66,
    UPDATE_DEVICE = 67,
    GET_DEVICES_LIST = 68,
    CREATE_BLUEPRINT = 69,
    GET_BLUEPRINT = 70,
    UPDATE_BLUEPRINT = 71,
    DELETE_BLUEPRINT = 72,
    GET_BLUEPRINTS_LIST = 73,
    ADD_WIDGETS_BLUEPRINT = 74,
}

export default MsgType;
