export default function PlaceImg({place,index=0,className=null}) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <img className="rounded-2xl mt-1 mx-1" src={'http://localhost:4000/uploads/'+place.photos[index]} alt=""/>
  );
}