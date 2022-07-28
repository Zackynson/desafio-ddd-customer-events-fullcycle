import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangedAddressEvent from "../customer-changed-address.event";

export default class EnviaConsoleLog3Handler
  implements EventHandlerInterface<CustomerChangedAddressEvent>
{
  handle(event: CustomerChangedAddressEvent): void {
    const { id, nome, endereco } = event.eventData
    
    console.log(`Endereço do cliente: ${id}, ${nome} alterado para: ${endereco}`); 
  }
}
