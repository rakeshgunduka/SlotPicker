function getMinChilds(hour_slots) {
  return hour_slots.map((slot) => {
    const min = Object.keys(slot)[0];
    const slotId = Object.values(slot)[0];
    return {
      id: min.slice(3),
      title: min.slice(3),
      value: min.slice(3),
      type: 'min',
      children: [
        slotId
      ]
    }
  });
}

function getHourChilds(date_slots) {
  return date_slots.map((time) => {
    if (!time.hour_slots) {
      return {
        id: time.hour,
        title: time.hour,
        value: time.hour,
        type: 'hour',
        childs:[
            '00',
        ]
      }
    } else {
      return {
        id: time.hour,
        title: time.hour,
        value: time.hour,
        type: 'hour',
        childs: getMinChilds(time.hour_slots)
      }
    }
  });
}

export function processData(propsData) {
  return  propsData.available_slots.map((slot) => {
    if (!slot.date_slots) {
      return {
        id: slot.date,
        title: slot.date,
        value: slot.date,
        type: 'date',
        childs:[
            'No slots',
        ]
      }
    } else {
      return {
        id: slot.date,
        title: slot.date,
        value: slot.date,
        type: 'date',
        childs: getHourChilds(slot.date_slots)
      }
    }
  })
}