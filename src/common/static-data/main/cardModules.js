import {emailIcon, filesIcon, importIcon} from "../../path-extracter/pathExtracter";
import {MAIN_PAGE_EMAILS_MODULE, MAIN_PAGE_FILES_MODULE, MAIN_PAGE_IMPORT_MODULE} from "../../constant-text/texts";

const cardModules = [
    {
        name: 'import',
        isActive: false,
        link: 'MainImport',
        image: importIcon,
        text: MAIN_PAGE_IMPORT_MODULE
    },
    {
        name: 'files',
        isActive: false,
        link: 'MainFiles',
        image: filesIcon,
        text: MAIN_PAGE_FILES_MODULE
    },
    {
        name: 'emails',
        isActive: false,
        link: 'MainEmails',
        image: emailIcon,
        text: MAIN_PAGE_EMAILS_MODULE
    },
];

export default cardModules;