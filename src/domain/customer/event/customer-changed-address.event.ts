import EventInterface from "../../@shared/event/event.interface";

type ChangeAddressEventData = { id: string, nome: string, endereco: string }

export default class CustomerChangedAddressEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: ChangeAddressEventData;

  constructor(eventData: ChangeAddressEventData) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
