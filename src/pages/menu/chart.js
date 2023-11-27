import Navbar from "@/components/Navbar";

function Chart() {
  return (
    <>
      <Navbar />
      <div className="superset mx-auto">
        <h1 className="text-4xl mt-10 mb-2 font-black">Superset Dashboard</h1>
        <p className="text-gray-700 mb-10">
          A Crop Condition-Considerate Dashboard Using Superset
        </p>
        <iframe
          title="My Superset Chart"
          className="ring-2 ring-indigo-700 ring-offset-4"
          width="100%"
          height="1000"
          src="http://localhost:8088/superset/dashboard/p/Ql6wKRY5xBq/"
          allowtransparency="true"
        />
      </div>
      <style jsx>{`
        .superset {
          width: 80%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default Chart;
