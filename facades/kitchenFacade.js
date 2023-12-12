function kitchenFacade(){

    const URL = "api/kitchen";


    function getPendingTickets() {
        const opts = makeOptions('GET');
        const supplierId = localStorage.getItem("supplierId");
        return fetch(URL+"/pending/"+supplierId, opts).then(r=> r.json());
    }

    function getInProgressTickets() {
        const opts = makeOptions('GET');
        const supplierId = localStorage.getItem("supplierId");
        return fetch(URL + '/inProgress/'+supplierId, opts).then((r) => r.json());
    }

    function getAllTickets() {
        const opts = makeOptions('GET');
        const supplierId = localStorage.getItem("supplierId");
        return fetch(URL + '/all/'+supplierId, opts).then((r) => r.json());
    }


    function acceptTicket(ticket) {
        const opts = makeOptions('PUT',ticket);
        return fetch(URL + '/accept', opts);
    }

    function denyTicket(ticketId) {
        const opts = makeOptions('PUT');
        return fetch(URL + '/deny/'+ticketId, opts);
    }

    function doneTicket(ticketId) {
        const opts = makeOptions('PUT');
        return fetch(URL + '/done/'+ticketId, opts);
    }

    const makeOptions = (method, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    return{
        getPendingTickets,
        getAllTickets,
        getInProgressTickets,
        acceptTicket,
        denyTicket,
        doneTicket,
    }
}

export default kitchenFacade();
