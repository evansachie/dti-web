export function BankTransferDetails() {
  return (
    <div className="bg-[#252A34] p-8 text-white">
      <p className="text-[#24a186] text-[12px] font-bold uppercase tracking-widest mb-3">
        Direct Bank Transfer
      </p>
      <div className="space-y-2 text-[14px] text-zinc-300">
        <p>
          <span className="text-white font-semibold">Account Name:</span> Enoch
          Aggrey
        </p>
        <p>
          <span className="text-white font-semibold">Bank:</span> CAL BANK
        </p>
        <p>
          <span className="text-white font-semibold">Account No.:</span>{" "}
          140001072013
        </p>
        <p>
          <span className="text-white font-semibold">Branch:</span> UG BRANCH
        </p>
      </div>
      <p className="text-zinc-500 text-[12px] mt-4">
        After transferring, email us at{" "}
        <a
          href="mailto:tfdi.ghana@gmail.com"
          className="text-[#24a186] hover:underline"
        >
          tfdi.ghana@gmail.com
        </a>{" "}
        with your receipt so we can acknowledge your gift.
      </p>
    </div>
  );
}
