import React, { useState, useCallback } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps';
import { MapPin, Navigation, ExternalLink, Phone, Compass, RotateCcw } from 'lucide-react';
import { Language } from '../types';
import { INSTITUTE_INFO } from '../data/instituteData';

// Institute Coordinates (Lohrouli Chouraha, Sadi Kala, Basti-Bansi Road, Siddharthnagar, UP)
export const INSTITUTE_LOCATION = {
  lat: 27.1045,
  lng: 82.8752
};

interface InteractiveMapProps {
  lang: Language;
}

// Inner controller to pan/reset view
const MapController: React.FC<{ isHi: boolean }> = ({ isHi }) => {
  const map = useMap();

  const handleResetCenter = useCallback(() => {
    if (map) {
      map.panTo(INSTITUTE_LOCATION);
      map.setZoom(15);
    }
  }, [map]);

  return (
    <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
      <button
        onClick={handleResetCenter}
        className="px-3 py-1.5 bg-white/95 hover:bg-white text-slate-700 text-xs font-semibold rounded-lg shadow-md border border-slate-200 backdrop-blur-xs flex items-center gap-1.5 transition-all hover:text-blue-700"
        title={isHi ? 'केंद्र पर वापस जाएं' : 'Re-center to Institute'}
        type="button"
      >
        <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
        <span>{isHi ? 'री-सेंटर' : 'Re-center'}</span>
      </button>
    </div>
  );
};

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ lang }) => {
  const isHi = lang === 'hi';
  const [infoOpen, setInfoOpen] = useState(true);

  // Retrieve API key from environment variable
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${INSTITUTE_LOCATION.lat},${INSTITUTE_LOCATION.lng}&query=${encodeURIComponent('Ritu Computer Training Center Lohrouli Chouraha Sadi Kala Siddharthnagar')}`;

  if (!apiKey) {
    return (
      <div className="w-full h-96 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <MapPin className="w-10 h-10 text-blue-600 mb-3" />
        <h4 className="text-base font-bold text-slate-900">
          {isHi ? 'गूगल मैप्स लोड हो रहा है' : 'Google Maps Loading'}
        </h4>
        <p className="text-xs text-slate-500 max-w-md mt-1">
          {isHi
            ? 'कृपया VITE_GOOGLE_MAPS_API_KEY कॉन्फ़िगर करें।'
            : 'Please configure VITE_GOOGLE_MAPS_API_KEY to view interactive map.'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
      {/* Map Header Bar */}
      <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-bold leading-tight">
              {isHi ? 'लाइव गूगल मैप नेविगेशन' : 'Live Google Maps Navigation'}
            </h4>
            <p className="text-[11px] text-slate-300">
              {isHi
                ? 'लोहरौली चौराहा, साड़ी कला (बस्ती-बांसी रोड, सिद्धार्थनगर)'
                : 'Lohrouli Chouraha, Sadi Kala (Basti-Bansi Road, Siddharthnagar)'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>{isHi ? 'दिशा-निर्देश पाएं (Directions)' : 'Get Directions'}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>

      {/* Map Canvas Container */}
      <div className="relative w-full h-[400px] sm:h-[460px] bg-slate-100">
        <APIProvider
          apiKey={apiKey}
          libraries={['marker']}
        >
          <Map
            mapId="DEMO_MAP_ID"
            defaultCenter={INSTITUTE_LOCATION}
            defaultZoom={15}
            gestureHandling="greedy"
            disableDefaultUI={false}
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            style={{ width: '100%', height: '100%' }}
          >
            <MapController isHi={isHi} />

            {/* Advanced Marker for Institute */}
            <AdvancedMarker
              position={INSTITUTE_LOCATION}
              title="Ritu Computer Training Center"
              onClick={() => setInfoOpen(true)}
            >
              <Pin
                background="#1d4ed8"
                glyphColor="#ffffff"
                borderColor="#1e40af"
                scale={1.2}
              />
            </AdvancedMarker>

            {/* Interactive Info Window */}
            {infoOpen && (
              <InfoWindow
                position={INSTITUTE_LOCATION}
                onCloseClick={() => setInfoOpen(false)}
                headerDisabled={false}
              >
                <div className="p-1 max-w-[260px] text-slate-900">
                  <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                    {isHi ? 'मान्यता प्राप्त संस्थान' : 'Authorized Center'}
                  </div>
                  <h5 className="font-extrabold text-sm text-slate-900 mt-0.5 leading-snug">
                    {isHi ? INSTITUTE_INFO.nameHi : INSTITUTE_INFO.name}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    {isHi
                      ? 'लोहरौली चौराहा, साड़ी कला, बस्ती-बांसी रोड, सिद्धार्थनगर (उ.प्र. - 272153)'
                      : 'Lohrouli Chouraha, Sadi Kala, Basti-Bansi Road, Siddharthnagar (UP - 272153)'}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                    <div className="text-[11px] text-slate-700 flex items-center gap-1 font-medium">
                      <span className="font-semibold text-blue-800">{isHi ? 'निदेशक:' : 'Director:'}</span>
                      <span>प्रभाकर मिश्रा</span>
                    </div>
                    <div className="text-[11px] text-slate-700 flex items-center gap-1 font-mono">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <a href="tel:9451028331" className="text-blue-700 hover:underline font-bold">
                        9451028331
                      </a>
                    </div>
                    <a
                      href={googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 w-full text-center py-1.5 px-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs rounded transition-colors"
                    >
                      {isHi ? 'गूगल मैप में खोलें' : 'Open in Google Maps'}
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>

      {/* Map Sub-bar / Quick Transport Badges */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-slate-700">
            {isHi ? 'बस्ती-बांसी मुख्य मार्ग पर सुलभ आवागमन' : 'Direct Access on Basti-Bansi Highway'}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span>📍 {isHi ? 'बस व ऑटो स्टैंड निकट' : 'Bus & Auto Stop Nearby'}</span>
          <span>🚲 {isHi ? 'सुरक्षित छात्र पार्किंग' : 'Safe Student Parking'}</span>
        </div>
      </div>
    </div>
  );
};
