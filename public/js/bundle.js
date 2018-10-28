const init = () => {
  const buttonHistoryGet = document.getElementById('api__button-history-get');
  buttonHistoryGet.addEventListener('click', () => {
    axios.get(document.getElementById('api__uri-history-get').value)
      .then(response => {
        document.getElementById('api__result-history-get').value = JSON.stringify(response.data);
      });
  }, false);

  const buttonAlarmGet = document.getElementById('api__button-alarm-get');
  buttonAlarmGet.addEventListener('click', () => {
    axios.get(document.getElementById('api__uri-alarm-get').value)
      .then(response => {
        document.getElementById('api__result-alarm-get').value = JSON.stringify(response.data);
      });
  }, false);

  const buttonAlarmGetOne = document.getElementById('api__button-alarm-get-one');
  buttonAlarmGetOne.addEventListener('click', () => {
    axios.get(document.getElementById('api__uri-alarm-get-one').value)
      .then(response => {
        document.getElementById('api__result-alarm-get-one').value = JSON.stringify(response.data);
      });
  }, false);

  const buttonAlarmPost = document.getElementById('api__button-alarm-post');
  buttonAlarmPost.addEventListener('click', () => {
    axios.post(
      document.getElementById('api__uri-alarm-post').value,
      JSON.parse(document.getElementById('api__body-alarm-post').value))
      .then(response => {
        document.getElementById('api__result-alarm-post').value = JSON.stringify(response.data);
      });
  }, false);

  const buttonAlarmPatch = document.getElementById('api__button-alarm-patch');
  buttonAlarmPatch.addEventListener('click', () => {
    axios.patch(
      document.getElementById('api__uri-alarm-patch').value,
      JSON.parse(document.getElementById('api__body-alarm-patch').value)
      )
      .then(response => {
        document.getElementById('api__result-alarm-patch').value = JSON.stringify(response.data);
      });
  }, false);

  const buttonAlarmDelete = document.getElementById('api__button-alarm-delete');
  buttonAlarmDelete.addEventListener('click', () => {
    axios.delete(document.getElementById('api__uri-alarm-delete').value)
      .then(response => {
        document.getElementById('api__result-alarm-delete').value = JSON.stringify(response.statusText);
      });
  }, false);
};

window.onload = () => {
  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      // document ready
      init();
    }
  }, 1000);
};
