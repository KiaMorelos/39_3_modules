function choice(items) {
    const random = Math.floor(Math.random() * items.length);
    return items[random]
}

function remove(item, items){
    return items.filter(function(i) {
        return i !== item
      });
}

export {choice, remove}