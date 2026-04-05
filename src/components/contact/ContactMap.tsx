export function ContactMap() {
  return (
    <div className="w-full h-[260px] overflow-hidden border border-zinc-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3293858787!2d-0.18834492414563!3d5.650498633483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b3b2a6965d1%3A0x7b09d6d29e1b5b6d!2sDepartment%20of%20Theatre%20Arts%2C%20University%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1712334000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TFDI Location - Dept. of Theatre Arts, University of Ghana"
      ></iframe>
    </div>
  );
}
