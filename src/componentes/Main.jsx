import CardsProductos from "./CardsProductos";
import ItemListContainer from "./ItemListContainer";

function Main() {
  return (
    <ItemListContainer title="Inicio">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <CardsProductos name="Whey Protein 1" precio="$1500"/>
        <CardsProductos name="Whey Protein 2" precio="$2000"/>
        <CardsProductos name="Whey Protein 3" precio="$2500"/>
      </section>
    </ItemListContainer>
  )
}
export default Main