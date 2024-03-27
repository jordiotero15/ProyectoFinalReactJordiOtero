import CardsProductos from "./CardsProductos";
import Page from "./Page";

function Main() {
  return (
    <Page title="Inicio">
      <section className="grid grid-cols-1 gap-4 sm-grid-cols-2 md:grid-cols-3">
        <CardsProductos name="Whey Protein 1"/>
        <CardsProductos name="Whey Protein 2"/>
        <CardsProductos name="Whey Protein 3"/>
      </section>
    </Page>
  )
}
export default Main