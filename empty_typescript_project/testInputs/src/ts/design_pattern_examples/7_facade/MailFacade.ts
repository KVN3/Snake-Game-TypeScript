import { MailRepository } from "./MailRepository";
import { ContactRepository } from "./ContactRepository";
import { Logger } from "./Logger";

export class MailFacade {
    // The sub-systems
    private _mailRepository: MailRepository;
    private _contactRepository: ContactRepository;
    private _logger: Logger;

    // Allow the sub-systems to be passed or newly instantiated, depending on application needs
    constructor(mailRepository: MailRepository = new MailRepository(), contactRepository: ContactRepository = new ContactRepository(), 
            logger: Logger = new Logger()) 
    {
        this._mailRepository = mailRepository || new MailRepository();
        this._contactRepository = contactRepository || new ContactRepository();
        this._logger = logger || new Logger();
    }

    // A 'short-cut' method utilizes the multiple sub-systems to perform a single 'main' task
    public saveMessage(): void {
        let contactId = this._contactRepository.getContactId();
        this._mailRepository.insertMessage(contactId);
        this._logger.writeLog();
    }
}