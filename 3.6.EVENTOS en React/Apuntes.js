const onClickListener = (event) => {
  alert('Para más información, acuda a recepción.\nMe ha salido un pareado sin haberlo planeado.');
};

const alertButton = <button onClick={onClickListener}>Más información</button>;


ReactDOM.render(
  alertButton,
  document.getElementById('react-root')
);