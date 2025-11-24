// components/sections/Contact/ContactInfo.tsx

export default function ContactInfo() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl animate-fade-in-up">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-gray-900">
        <span className="text-3xl">💬</span> Contact Information
      </h2>

      <div className="space-y-5">
        {/* Address */}
        <div className="flex gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-blue-50 hover:translate-x-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xl">
            📍
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Office Address</h3>
            <p className="text-gray-600 leading-relaxed">
              123 Business Avenue <br />
              Suite 500, Financial District <br />
              New York, NY 10001 <br />
              United States
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-blue-50 hover:translate-x-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xl">
            📧
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Email Address</h3>
            <p className="text-gray-600">
              General:{" "}
              <span className="font-semibold text-blue-600">
                info@visago.com
              </span>
            </p>
            <p className="text-gray-600">
              Support:{" "}
              <span className="font-semibold text-blue-600">
                support@visago.com
              </span>
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-blue-50 hover:translate-x-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xl">
            📞
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
            <p className="text-gray-600">
              Main:{" "}
              <span className="font-semibold text-blue-600">
                +1 (555) 123-4567
              </span>
            </p>
            <p className="text-gray-600">
              Emergency:{" "}
              <span className="font-semibold text-blue-600">
                +1 (555) 987-6543
              </span>
            </p>
          </div>
        </div>

        {/* Business hours */}
        <div className="flex gap-4 rounded-xl bg-gray-50 p-4 transition hover:bg-blue-50 hover:translate-x-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xl">
            🕒
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Business Hours</h3>
            <table className="mt-2 w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Monday - Friday</td>
                  <td className="py-2 text-right text-gray-600">
                    9:00 AM - 6:00 PM
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Saturday</td>
                  <td className="py-2 text-right text-gray-600">
                    10:00 AM - 4:00 PM
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Sunday</td>
                  <td className="py-2 text-right text-gray-600">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
