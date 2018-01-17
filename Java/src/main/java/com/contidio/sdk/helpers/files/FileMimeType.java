package com.contidio.sdk.helpers.files;

import org.apache.commons.lang3.StringUtils;

import com.contidio.sdk.constants.SdkConstants;
import com.contidio.sdk.exceptions.InvalidOperationBackendException;
import com.contidio.sdk.proto.MetadataProtocol.BackendErrorCode;
import com.contidio.sdk.proto.MetadataProtocol.BinaryType;

public class FileMimeType
{
    // Contidio supported MIME types
    // We have all official HTML5 image/video/audio formats + Webp + Webm + TIFF

    public static final FileMimeType[] FILE_MIME_TYPES = new FileMimeType[]
    {
        // see http://www.w3schools.com/html/html_images.asp

        new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_JPG, BinaryType.IMAGE, "jpg"),
        new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_GIF, BinaryType.IMAGE, "gif"),
        new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_PNG, BinaryType.IMAGE, "png"),

        // Google proprietary format

        new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_WEBP, BinaryType.IMAGE, "webp"),

        // common for raw input

        new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_TIFF, BinaryType.IMAGE, "tiff"),    
                
        // see http://www.w3schools.com/html/html5_video.asp

        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_MP4, BinaryType.VIDEO, "mp4"),
        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_WEBM, BinaryType.VIDEO, "webm"),
        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_OGG, BinaryType.VIDEO, "ogg"),

        // new formats from https://docs.microsoft.com/en-us/azure/media-services/media-services-media-encoder-standard-formats

        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_MKV, BinaryType.VIDEO, "mkv"),
        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_MOV, BinaryType.VIDEO, "mov"),
        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_3GPP, BinaryType.VIDEO, "3gpp"),
        new FileMimeType(SdkConstants.MIME_TYPE_VIDEO_WMV, BinaryType.VIDEO, "wmv"),

        // see http://www.w3schools.com/html/html5_audio.asp

        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_M4A, BinaryType.AUDIO, "m4a"),
        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_XM4A, BinaryType.AUDIO, "m4a"),
        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_MP3, BinaryType.AUDIO, "mp3"),
        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_MP4, BinaryType.AUDIO, "mp4"),
        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_MPEG, BinaryType.AUDIO, "mpeg"),
        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_OGG, BinaryType.AUDIO, "ogg"),
        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_WAV, BinaryType.AUDIO, "wav"),

        // https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats

        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_WEBM, BinaryType.AUDIO, "webm"),
        
        // new formats from https://docs.microsoft.com/en-us/azure/media-services/media-services-media-encoder-standard-formats

        new FileMimeType(SdkConstants.MIME_TYPE_AUDIO_WMA, BinaryType.AUDIO, "wma"),

        // 

        new FileMimeType(SdkConstants.MIME_TYPE_DOCUMENT_PDF, BinaryType.DOCUMENT, "pdf"),
        new FileMimeType(SdkConstants.MIME_TYPE_DOCUMENT_HTML, BinaryType.DOCUMENT, "html"),
        new FileMimeType(SdkConstants.MIME_TYPE_DOCUMENT_TXT_PLAIN, BinaryType.DOCUMENT, "txt")
    };
    
    public static final FileMimeType[] FILE_MIME_TYPES_ECP_ONLY = new FileMimeType[]
    {
    	new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_EPS, BinaryType.IMAGE, "eps"),
    	new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_SVG, BinaryType.IMAGE, "svg"),
    	new FileMimeType(SdkConstants.MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR, BinaryType.IMAGE, "ai")
    };
    
    public static String[] getMimeTypes(boolean includeEcp)
    {
    	String[] mimeTypes;
    	
    	if (!includeEcp) {
	    	mimeTypes = new String[FileMimeType.FILE_MIME_TYPES.length];
	
	        for (int i = 0; i < FILE_MIME_TYPES.length; i++)
	        {
	            mimeTypes[i] = FILE_MIME_TYPES[i].getMimeType();
	        }
    	} else {
    		mimeTypes = new String[FileMimeType.FILE_MIME_TYPES.length + 
    		                       FileMimeType.FILE_MIME_TYPES_ECP_ONLY.length];
    		
    		int target = 0;
    		
	        for (int i = 0; i < FILE_MIME_TYPES.length; i++)
	        {
	            mimeTypes[target] = FILE_MIME_TYPES[i].getMimeType();
	            target ++;
	        }
	        
	        for (int i = 0; i < FILE_MIME_TYPES_ECP_ONLY.length; i++) {
	        	mimeTypes[target] = FILE_MIME_TYPES_ECP_ONLY[i].getMimeType();
	            target ++;
	        }
    	}

        return mimeTypes;
    }    

    public static FileMimeType getFileMimeType(String mimeType, boolean includeEcp) 
    	throws InvalidOperationBackendException
    {            
        for (FileMimeType availableFileMimeType : FileMimeType.FILE_MIME_TYPES)
        {
            if (StringUtils.equals(availableFileMimeType.getMimeType(), mimeType))
            {
                return availableFileMimeType;
            }
        }
        
        if (includeEcp) {
        	for (FileMimeType availableFileMimeType : FileMimeType.FILE_MIME_TYPES_ECP_ONLY)
            {
                if (StringUtils.equals(availableFileMimeType.getMimeType(), mimeType))
                {
                    return availableFileMimeType;
                }
            }
        }
        
        throw new InvalidOperationBackendException(BackendErrorCode.BINARY_MIME_TYPE_INVALID,
            "This mime type is not supported");
    }
    
    public static boolean isVectorContentType(String mimeType) {
		if (StringUtils.isEmpty(mimeType))
			return false;
		
		return StringUtils.equalsAny(mimeType, 
				SdkConstants.MIME_TYPE_IMAGE_EPS,
				SdkConstants.MIME_TYPE_IMAGE_SVG,
				SdkConstants.MIME_TYPE_IMAGE_APPLICATION_ILLUSTRATOR);
	}

    private String mimeType;
    private BinaryType binaryType;
    private String extension;

    public FileMimeType(String mimeType, BinaryType binaryType, String extension)
    {
        this.mimeType = mimeType;
        this.binaryType = binaryType;
        this.extension = extension;
    }
    
    public String getMimeType() {
    	return mimeType;
    }
    
    public BinaryType getBinaryType() {
    	return binaryType;
    }
    
    public String getExtension() {
    	return extension;
    }
}


